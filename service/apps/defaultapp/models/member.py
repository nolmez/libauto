from django.db import models
from django.db.models.fields import CharField
from django.db.models import ForeignKey
from apps.defaultapp.models import Address


class Member(models.Model):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    mail = CharField(max_length=100)
    phone_number = CharField(max_length=100, null=True, blank=True)
    gender = CharField(max_length=100, null=True, blank=True)
    address = CharField(max_length=100, null=True, blank=True)
    city = CharField(max_length=100, null=True, blank=True)
    state = CharField(max_length=100, null=True, blank=True)
    country = CharField(max_length=100, null=True, blank=True)
    zip_code = CharField(max_length=100, null=True, blank=True)

    class Meta:
        db_table = 'member'
