FROM pypy:3.5-7.0.0

WORKDIR /app
ADD . /app

RUN pip install virtualenv && virtualenv venv
