import socket

def launch_params():
    host = ''     
    port = 12345
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((host, port))
    s.listen(1)
    con, addr = s.accept()
    return s, con, addr

if __name__ == "__main__":
    
    s, con, addr = launch_params()
    
    print('Connected', addr)
    
    while True:
        try:
            data = con.recv(1024)

            if not data: break

            print(b"Data: " + data)
            con.sendall(b"Server reply")

        except socket.error:
            print("Error.")
            break

    con.close()
