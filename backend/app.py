from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

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


@app.route('/events', methods=['GET'])
def get_events():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM events ORDER BY id DESC")
    rows = cursor.fetchall()
    col_names = [desc[0] for desc in cursor.description]
    data = [dict(zip(col_names, row)) for row in rows]
    return jsonify(data)

@app.route('/ebooks', methods=['GET'])
def get_ebooks():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM ebooks ORDER BY id DESC")
    ebooks = cursor.fetchall()
    return jsonify(ebooks)

if __name__ == '__main__':
    app.run(debug=True)
