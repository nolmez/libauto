from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import User
from apps.defaultapp.serializers.user import UserSerializer


class UserViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAdminUser]
