from django.db import models
from django.db.models.fields import CharField
from django.db.models import ForeignKey
from apps.defaultapp.models import Address


class User(models.Model):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    mail = CharField(max_length=100)
    phone_number = CharField(max_length=100)
    gender = CharField(max_length=100)
    address = ForeignKey(Address)

    class Meta:
        db_table = 'user'
