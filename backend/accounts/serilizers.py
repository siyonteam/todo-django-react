from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator




class RegisterSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True , required = True , validators=[validate_password])
    password2 = serializers.CharField(write_only=True , required = True)
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])

    class Meta :
        model = User
        fields = ('username' ,'email' ,  'password1' , 'password2')


    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError("password must match")
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            email = validated_data['email'] ,
            password = validated_data['password1']
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required = True)


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(write_only=True , required = True)
    password1 = serializers.CharField(write_only=True , required = True , validators=[validate_password])
    password2 = serializers.CharField(write_only=True , required = True)

    def validate_old_password(self, value):
        user = self.instance
        if not user.check_password(value):
            raise serializers.ValidationError("old password must match")
        return value

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError("password must match")
        return attrs

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password1'])
        instance.save()
        return instance


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()


    def validate_email(self, value):
        try :
            user = User.objects.get(email=value)
        except :
            raise serializers.ValidationError("the user with email does not exist")

        return value



class SetNewPassword(serializers.Serializer):
    password1 = serializers.CharField(write_only=True , required = True , validators=[validate_password])
    password2 = serializers.CharField(write_only=True , required = True)