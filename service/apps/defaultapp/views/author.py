from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import Author
from apps.defaultapp.serializers.author import AuthorSerializer


class AuthorViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    # permission_classes = [permissions.IsAdminUser]
