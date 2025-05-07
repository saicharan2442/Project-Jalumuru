from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import smtplib
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Function to get a fresh MySQL connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="2442",
        database="jalumuru_hill"
    )

# Helper function to format datetime fields into string format
def format_datetime(date_value):
    if date_value:
        return date_value.strftime("%Y-%m-%d %H:%M:%S")
    return None

@app.route('/donars', methods=['GET'])
def get_donars():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM donars ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    
    data = []
    for row in rows:
        donor = dict(zip(col_names, row))
        donor["donated_at"] = format_datetime(donor.get("donated_at"))
        data.append(donor)
    
    cursor.close()
    db.close()
    return jsonify(data)

@app.route('/ebooks', methods=['GET'])
def get_ebooks():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM ebooks ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    
    data = []
    for row in rows:
        ebook = dict(zip(col_names, row))
        ebook["created_at"] = format_datetime(ebook.get("created_at"))
        data.append(ebook)

    cursor.close()
    db.close()
    return jsonify(data)

@app.route('/events', methods=['GET'])
def get_events():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT id, eventname, event_date, event_temple, discription FROM events ORDER BY id DESC")
    rows = cursor.fetchall()

    events = []
    for row in rows:
        event = {
            "id": row[0],
            "eventname": row[1],
            "event_date": row[2],  # It's already a varchar
            "event_temple": row[3],
            "discription": row[4]
        }
        events.append(event)

    cursor.close()
    db.close()
    return jsonify(events)


@app.route('/temples', methods=['GET'])
def get_temples():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM temples ORDER BY id ASC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    
    data = []
    for row in rows:
        temple = dict(zip(col_names, row))
        temple["created_at"] = format_datetime(temple.get("created_at"))
        data.append(temple)

    cursor.close()
    db.close()
    return jsonify(data)

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM contacts ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    
    data = []
    for row in rows:
        contact = dict(zip(col_names, row))
        contact["created_at"] = format_datetime(contact.get("created_at"))
        data.append(contact)

    cursor.close()
    db.close()
    return jsonify(data)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    try:
        # Send email
        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login("ffmails500@gmail.com", "S@da20021214")
            body = f"From: {name} <{email}>\nSubject: {subject}\n\n{message}"
            smtp.sendmail("ffmails500@gmail.com", "ffmails500@gmail.com", body)

        return jsonify({'success': True, 'message': 'Message delivered successfully.'}), 200
    except Exception as e:
        print(e)
        return jsonify({'success': False, 'message': 'Sorry, message not sent. Try again later.'}), 500

# Endpoint to insert a new donation record with current date
@app.route('/api/donar', methods=['POST'])
def add_donar():
    data = request.json
    name = data.get('name')
    village = data.get('village')
    district = data.get('district')
    email = data.get('email')
    phone_number = data.get('phone_number')
    donated = data.get('donated')

    # Use current timestamp for donated_at field
    donated_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    db = get_db_connection()
    cursor = db.cursor()
    query = """
        INSERT INTO donars (Name, village, district, email, phone_number, donated, donated_at)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(query, (name, village, district, email, phone_number, donated, donated_at))
    db.commit()
    
    cursor.close()
    db.close()

    return jsonify({'success': True, 'message': 'Donor added successfully.'}), 201

if __name__ == '__main__':
    app.run(debug=True)
