from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import smtplib

app = Flask(__name__)
CORS(app)

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="2442",
    database="jalumuru_hill"
)

@app.route('/donars', methods=['GET'])
def get_donars():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM donars ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    data = [dict(zip(col_names, row)) for row in rows]
    return jsonify(data)

@app.route('/ebooks', methods=['GET'])
def get_ebooks():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM ebooks ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    data = [dict(zip(col_names, row)) for row in rows]
    return jsonify(data)


@app.route('/events', methods=['GET'])
def get_events():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM events ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    data = [dict(zip(col_names, row)) for row in rows]
    return jsonify(data)

@app.route('/temples', methods=['GET'])
def get_temples():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM temples ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    data = [dict(zip(col_names, row)) for row in rows]
    return jsonify(data)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    try:
        # Optional: Store in DB or send via SMTP    
        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login("jalumuruhill@oakon.com", "S@da20021214")
            body = f"From: {name} <{email}>\nSubject: {subject}\n\n{message}"
            smtp.sendmail("jalumuruhill@oakon.com", "jalumuruhill@oakon.com", body)

        return jsonify({'success': True, 'message': 'Message delivered successfully.'}), 200
    except Exception as e:
        print(e)
        return jsonify({'success': False, 'message': 'sorry, Message not sent. Try again later.'}), 500


if __name__ == '__main__':
    app.run(debug=True)
