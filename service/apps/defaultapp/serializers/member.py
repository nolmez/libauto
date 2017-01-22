from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import Member


class MemberSerializer(ModelSerializer):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    mail = CharField(max_length=100)
    gender = CharField(max_length=100, required=False, allow_null=True)
    phone_number = CharField(max_length=100, required=False, allow_null=True)
    address = CharField(max_length=100, required=False, allow_null=True)
    city = CharField(max_length=100, required=False, allow_null=True)
    state = CharField(max_length=100, required=False, allow_null=True)
    country = CharField(max_length=100, required=False, allow_null=True)
    zip_code = CharField(max_length=100, required=False, allow_null=True)

    class Meta:
        model = Member
        fields = (
            'id',
            'first_name',
            'last_name',
            'mail',
            'address',
            'gender',
            'phone_number',
            'city',
            'state',
            'country',
            'zip_code'
        )
