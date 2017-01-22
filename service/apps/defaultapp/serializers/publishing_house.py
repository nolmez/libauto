from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import PublishingHouse


class PublishingHouseSerializer(ModelSerializer):
    name = CharField(max_length=100)
    address = CharField(max_length=100, required=False, allow_null=True)
    city = CharField(max_length=100, required=False, allow_null=True)
    state = CharField(max_length=100, required=False, allow_null=True)
    country = CharField(max_length=100, required=False, allow_null=True)
    zip_code = CharField(max_length=100, required=False, allow_null=True)

    class Meta:
        model = PublishingHouse
        fields = ('id', 'name', 'address', 'city', 'state', 'country', 'zip_code')
