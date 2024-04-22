from rest_framework import serializers
from ..models.question import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ["question_text", "pub_date"]
        # fields = '__all__'
