from rest_framework.serializers import ModelSerializer, CharField

from apps.defaultapp.models import Address
from apps.defaultapp.models import Library
from apps.defaultapp.serializers import PrimaryKeyRelatedFieldWithSerialization
from apps.defaultapp.serializers.address import AddressSerializer


class LibrarySerializer(ModelSerializer):
    name = CharField(max_length=100)
    address = PrimaryKeyRelatedFieldWithSerialization(queryset=Address.objects.all(),
                                                      serializer_class=AddressSerializer)

    class Meta:
        model = Library
        fields = (
            'id',
            'name',
            'address'
        )
