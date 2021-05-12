Feature: Login Tottus

    Scenario Outline: Log In Correcto
        Given que el usuario se encuentra en la pagina de Tottus
        When ingresa "<UserName>" y "<Password>" para loguearse
        Then verifica que el "<NickName>" es el correcto

        Examples:
            | UserName | Password | NickName                |
            | admin    | 12345678 | Usuario : Administrador |

    Scenario Outline: Log In Incorrecto por Password
        Given que el usuario se encuentra en la pagina de Tottus
        When ingresa "<UserName>" y "<Password>" para loguearse
        Then verifica que el mensaje de error

        Examples:
            | UserName | Password |
            | admin    | 1234465  |


    Scenario Outline: Log In Incorrecto por UserName
        Given que el usuario se encuentra en la pagina de Tottus
        When ingresa "<UserName>" y "<Password>" para loguearse
        Then verifica que el mensaje de error

        Examples:
            | UserName | Password |
            | eduardo  | 1234465  |