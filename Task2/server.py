import mysql.connector
from tabulate import tabulate

mydb = mysql.connector.connect(
  host="mysql-service",
  user="root",
  password="root",
  database="university"
)

mycursor = mydb.cursor()
mycursor.execute('SELECT fullName, year FROM students LEFT JOIN marks ON students.id = mark.studentIdPK WHERE title =\"Модели развертывания удаленных сервисов\" ORDER BY grade DESC')

result = mycursor.fetchall()

print(tabulate(result, headers=["Фамилия Имя Отчество", "Год рождения"]))
