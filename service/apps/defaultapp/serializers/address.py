from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models.address import Address


class AddressSerializer(ModelSerializer):
    address = CharField(max_length=100)
    city = CharField(max_length=100)
    state = CharField(max_length=100)
    country = CharField(max_length=100)
    zip_code = CharField(max_length=100)

    class Meta:
        model = Address
        fields = (
            'id',
            'address',
            'city',
            'state',
            'country',
            'zip_code'
        )
