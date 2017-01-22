from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import Library
from apps.defaultapp.serializers.library import LibrarySerializer


class LibraryViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer
    # permission_classes = [permissions.IsAdminUser]
