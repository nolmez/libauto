from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import Address
from apps.defaultapp.serializers.address import AddressSerializer


class AddressViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    # permission_classes = [permissions.IsAdminUser]
