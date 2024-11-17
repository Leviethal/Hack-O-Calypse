from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

# File to store user data
USER_DATA_FILE = 'user_data.txt'

# Function to read user data from the file
def read_user_data():
    if not os.path.exists(USER_DATA_FILE):
        return []
    with open(USER_DATA_FILE, 'r') as file:
        users = file.readlines()
    users = [user.strip().split(":") for user in users]  # Split username and password by ':'
    return users

# Function to write new user data to the file
def write_user_data(username, password, role):
    with open(USER_DATA_FILE, 'a') as file:
        file.write(f"{username}:{password}:{role}\n")

@app.route('/')
def login():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login_post():
    username = request.form['username']
    password = request.form['password']
    role = request.form['role']  # Get the role (student or teacher)
    
    users = read_user_data()
    
    for user in users:
        if user[0] == username and user[1] == password:
            if user[2] == 'student' and role == 'student':
                return redirect(url_for('student_dashboard'))  # Redirect to student dashboard
            elif user[2] == 'teacher' and role == 'teacher':
                return redirect(url_for('teacher_dashboard'))  # Redirect to teacher dashboard
    
    return "Invalid credentials or role. Please try again."

@app.route('/create-account')
def create_account():
    return render_template('create_account.html')

@app.route('/create-account', methods=['POST'])
def create_account_post():
    username = request.form['username']
    password = request.form['password']
    role = request.form['role']  # User's role when creating the account
    
    # Check if the username already exists
    users = read_user_data()
    for user in users:
        if user[0] == username:
            return "Username already exists. Please choose another."

    # Store the new user data
    write_user_data(username, password, role)
    return "Account successfully created!"

@app.route('/student-dashboard')
def student_dashboard():
    return render_template('student_dashboard.html')

@app.route('/teacher-dashboard')
def teacher_dashboard():
    return render_template('teacher_dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
