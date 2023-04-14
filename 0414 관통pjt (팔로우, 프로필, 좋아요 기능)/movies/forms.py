from django import forms
from .models import Movie, Comment


class MovieForm(forms.ModelForm):
    class Meta:
        model = Movie
        fields = ('title', 'description')

# class CommentForm(forms.ModelForm):
#     class Meta:
#         model= Comment
#         exclude = ('movie_id','user_id')

class CommentForm(forms.ModelForm):
    content = forms.CharField(
        label = '댓글',
        widget = forms.TextInput(
            attrs={
                'placeholder': '댓글을 작성해주세요:)'
            }
        ),
    )

    class Meta:
        model = Comment
        fields = (
            'content',
        )