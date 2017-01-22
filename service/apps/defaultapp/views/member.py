from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import Member
from apps.defaultapp.serializers.member import MemberSerializer


class MemberViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    # permission_classes = [permissions.IsAdminUser]
