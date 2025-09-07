from enum import unique

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from .models import Account


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=Account.objects.all())]
    )

    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

    def create(self, validated_data):
        validated_data['email'] = validated_data['email'].lower().strip()
        user = Account.objects.create_user(
            validated_data['first_name'],
            validated_data['last_name'],
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],

        )
        # user = User.Objects.create_user(**validated_data)

        return user
