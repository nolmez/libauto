from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import PublishingHouse


class PublishingHouseSerializer(ModelSerializer):
    name = CharField(max_length=100)
    address = CharField(max_length=100, allow_null=True, allow_blank=True)
    city = CharField(max_length=100, allow_null=True, allow_blank=True)
    state = CharField(max_length=100, allow_null=True, allow_blank=True)
    country = CharField(max_length=100, allow_null=True, allow_blank=True)
    zip_code = CharField(max_length=100, allow_null=True, allow_blank=True)

    class Meta:
        model = PublishingHouse
        fields = ('id', 'name', 'address', 'city', 'state', 'country', 'zip_code')
