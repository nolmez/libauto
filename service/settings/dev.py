import os
from .common import *


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = True

ALLOWED_HOSTS = ["localhost"]
CORS_ORIGIN_ALLOW_ALL = True

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.postgresql_psycopg2',
    #     'NAME': 'libot',
    #     'USER': 'libot',
    #     'PASSWORD': 'libot',
    #     'HOST': 'localhost'
    # },
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3')
    }
}


STATIC_URL = '/static/'
