import socket

if __name__ == "__main__":

    host = socket.gethostname()
    port = 12345                  
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((host, port))
    
    s.sendall(b'Hello world')
    data = s.recv(1024)
    print('Received', repr(data))
    
    s.close()
    
