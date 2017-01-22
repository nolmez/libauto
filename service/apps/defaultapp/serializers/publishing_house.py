from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import Address
from apps.defaultapp.models import PublishingHouse
from apps.defaultapp.serializers import PrimaryKeyRelatedFieldWithSerialization
from apps.defaultapp.serializers.address import AddressSerializer


class PublishingHouseSerializer(ModelSerializer):
    name = CharField(max_length=100)
    address = PrimaryKeyRelatedFieldWithSerialization(queryset=Address.objects.all(),
                                                      serializer_class=AddressSerializer)

    class Meta:
        model = PublishingHouse
        fields = ('id', 'name', 'address')
