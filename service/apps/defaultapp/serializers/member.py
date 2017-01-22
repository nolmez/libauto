from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import User
from apps.defaultapp.models.address import Address
from apps.defaultapp.serializers import PrimaryKeyRelatedFieldWithSerialization
from apps.defaultapp.serializers.address import AddressSerializer


class MemberSerializer(ModelSerializer):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    mail = CharField(max_length=100)
    gender = CharField(max_length=100, allow_null=True, allow_blank=True)
    phone_number = CharField(max_length=100, allow_null=True, allow_blank=True)
    address = CharField(max_length=100, allow_null=True, allow_blank=True)
    city = CharField(max_length=100, allow_null=True, allow_blank=True)
    state = CharField(max_length=100, allow_null=True, allow_blank=True)
    country = CharField(max_length=100, allow_null=True, allow_blank=True)
    zip_code = CharField(max_length=100, allow_null=True, allow_blank=True)

    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'mail',
            'address',
            'gender',
            'phone_number'
        )
