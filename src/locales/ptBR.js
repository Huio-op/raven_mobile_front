export default {
  formik: {
    mixed: {
      default: 'É inválido',
      required: 'Este campo não pode ficar vazio',
      oneOf: 'Deve ser um dos seguintes valores: ${values}',
      notOneOf: 'Não pode ser um dos seguintes valores: ${values}',
    },
    string: {
      length: 'Deve ter exatamente ${length} caracteres',
      min: 'Deve ter pelo menos ${min} caracteres',
      max: 'Deve ter no máximo ${max} caracteres',
      email: 'Insira um e-mail válido',
      url: 'Deve ter um formato de URL válida',
      trim: 'Não deve conter espaços no início ou no fim.',
      lowercase: 'Deve estar em maiúsculo',
      uppercase: 'Deve estar em minúsculo',
      password: 'Deve conter 3 caracteres, uma letra maiúscula, um número e um caracter especial',
    },
    number: {
      min: 'Deve ser no mínimo ${min}',
      max: 'Deve ser no máximo ${max}',
      lessThan: 'Deve ser menor que ${less}',
      moreThan: 'Deve ser maior que ${more}',
      notEqual: 'Não pode ser igual à ${notEqual}',
      positive: 'Deve ser um número posítivo',
      negative: 'Deve ser um número negativo',
      integer: 'Deve ser um número inteiro',
    },
    date: {
      min: 'Deve ser maior que a data ${min}',
      max: 'Deve ser menor que a data ${max}',
    },
    array: {
      min: 'Deve ter no mínimo ${min} itens',
      max: 'Deve ter no máximo ${max} itens',
    },
  },
  welcome: {
    welcomeTo: 'Bem vindo ao',
    raven: 'Raven',
    create: 'Criar conta',
    login: 'Fazer login',
  },
  mainHeader: {
    Feed: 'Página inicial',
    Search: 'Pesquisar',
    Notifications: 'Notificações',
    Profile: 'Perfil',
    FullPost: 'Post',
    EditProfile: 'Editando perfil',
  },
  feed: {
    home: 'Página inicial',
  },
  form: {
    email: 'E-mail',
    userName: 'Nome',
    password: 'Senha',
    passwordConfirm: 'Confirmar senha',
    uniqueKey: 'Nome de usuário',
    birthDate: 'Data de nascimento',
    save: 'Salvar',
  },
  createAccount: {
    fillTheForm: 'Preencha o formulário para ter acesso ao Raven',
    title: 'Crie sua conta',
    createSuccess: 'Usuário criado com sucesso!',
  },
  login: {
    title: 'Entre em sua conta',
    enter: 'Entrar',
    errors: {
      userNotFound: 'Email ou senha não encontrados, verifique se as informações estão corretas',
    },
  },
  post: {
    post: 'Postar',
    placeholder: 'O que está pensando?',
    more: {
      report: 'Reportar post',
      reportSuccess: 'Post reportado e será avaliado',
    },
  },
  profile: {
    following: 'Seguindo',
    followers: 'Seguidores',
    follow: 'Seguir',
    edit: 'Editar',
    logout: 'Sair',
    camera: 'Câmera',
    gallery: 'Galeria',
    bio: 'Bio',
    banner: 'Banner',
    profilePicture: 'Foto de perfil',
  },
  search: {
    search: 'Pesquisar',
  },
};
