          function validar() {
          var nome = form.nome.value; 
          var email = form.email.value;
          var telefone = form.telefone.value;
          var mensagem = form.mensagem.value;
      
          if (nome == "") {
              alert("Preencha o campo com seu nome.");
              form.nome.focus;
              return false
          } 
          else if (email == "") {
              alert("Preencha o campo com seu email.")
              form.email.focus;
              return false
          }
          else if (telefone == "") {
              alert("Preencha o campo com seu telefone.")
              form.telefone.focus;
              return false
          }
          else if (mensagem == "") {
              alert("Preencha o campo com sua mensagem.")
              form.mensagem.focus;
              return false
          }
          else {
              alert("Tudo certo!! Obrigado pelo seu cadastro.")
          }
      
      }