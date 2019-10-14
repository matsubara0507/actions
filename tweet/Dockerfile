FROM python:3.7.4-slim

ENV TWEEPY_VERSION 3.8.0
RUN pip install tweepy==$TWEEPY_VERSION

COPY entrypoint.py /entrypoint.py

ENTRYPOINT ["/entrypoint.py"]
