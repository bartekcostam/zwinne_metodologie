import socket
import mysql.connector

def launch_params():
    host = ''
    port = 12345
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((host, port))
    s.listen(5)

    db = mysql.connector.connect(host="localhost",
                            user="wspauser",
                            password="password",
                            db="wspa")
    cur = db.cursor()
    return s, db, cur

if __name__ == "__main__":
    
    s, db, cur = launch_params()
    
    while True:
        try:
            con, addr = s.accept()
            print('Connected', addr)
            data = con.recv(1024)               #server awaits data    

            print(b"Data: " + data)
            con.sendall(b"Server reply")        #serwer sends data

            cur.execute("SELECT * FROM test")   #SELECT query

            for x in cur.fetchall():            #prints first cell of all rows
                print(row[0])

        except socket.error:
            print("Error.")
            break

    con.close()
    s.close()
    db.close()
