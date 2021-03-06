from django.db import models
from django.db.models.fields import CharField


class PublishingHouse(models.Model):
    name = CharField(max_length=100)
    address = CharField(max_length=100, null=True, blank=True)
    city = CharField(max_length=100, null=True, blank=True)
    state = CharField(max_length=100, null=True, blank=True)
    country = CharField(max_length=100, null=True, blank=True)
    zip_code = CharField(max_length=100, null=True, blank=True)

    class Meta:
        db_table = 'publishing_house'
