from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import PublishingHouse
from apps.defaultapp.serializers.publishing_house import PublishingHouseSerializer


class PublishingHouseViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = PublishingHouse.objects.all()
    serializer_class = PublishingHouseSerializer
    # permission_classes = [permissions.IsAdminUser]
