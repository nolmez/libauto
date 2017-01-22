from django.db import models
from django.db.models.fields import CharField
from django.db.models import ForeignKey


class PublishingHouse(models.Model):
    name = CharField(max_length=100)
    address = ForeignKey('Address', null=True, blank=True)

    class Meta:
        db_table = 'publishing_house'
