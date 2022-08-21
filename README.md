# aws-ci-cd

- criação da aplicação node ;
- criação de aplicação no elastic beanstalk da aws;
- criação do codepipeline que vai ficar responsavel de atualizar meu código no meu ambiente do beanstalk;

- tive que colocar uma configuração dentro da elastic beanstalk para setar a port onde esta a aplicação;
- é um processo de CI/CD básico que ainda nãop contem testes;
- optei por fazer sem os arquivos de buildspec.yml e .npmrc pois como é uma aplicação em node simples não seria necessárrio

# ROTAS

<!-- GET RAIZ  -->
 - http://nodetestev2-env.eba-cwmczksc.us-east-1.elasticbeanstalk.com
<!-- GET - CHALLENGE - VERSION  -->
 - http://nodetestev2-env.eba-cwmczksc.us-east-1.elasticbeanstalk.com/challenge/v2
<!-- GET GITHUB REPO -->
 - http://nodetestev2-env.eba-cwmczksc.us-east-1.elasticbeanstalk.com/github

 # OBS

 - aplicação rodando de modo gratuito na aws.
 - não consegui fazer a conteinerização dentro da aws por falta de conhecimento ainda.