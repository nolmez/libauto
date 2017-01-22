from django.db import models
from django.db.models.fields import CharField
from django.db.models import ForeignKey
from apps.defaultapp.models import Address


class Library(models.Model):
    name = CharField(max_length=100, unique=True)
    address = ForeignKey(Address)

    class Meta:
        db_table = 'library'
