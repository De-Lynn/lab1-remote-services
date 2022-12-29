FROM python:latest
RUN pip install mysql-connector-python
RUN pip install tabulate
COPY ./server.py /home/
WORKDIR /home
CMD ["python3", "server.py"]
