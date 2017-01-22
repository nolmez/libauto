from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import User
from apps.defaultapp.models.address import Address
from apps.defaultapp.serializers import PrimaryKeyRelatedFieldWithSerialization
from apps.defaultapp.serializers.address import AddressSerializer


class UserSerializer(ModelSerializer):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    mail = CharField(max_length=100)
    gender = CharField(max_length=100)
    phone_number = CharField(max_length=100)
    address = PrimaryKeyRelatedFieldWithSerialization(queryset=Address.objects.all(),
                                                      serializer_class=AddressSerializer)

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
