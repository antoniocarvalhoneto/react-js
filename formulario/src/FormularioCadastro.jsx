import InputField from "./InputField";
import BotaoEnviar from "./BotaoEnviar";


function FormularioCadastro() {
    return(
        <form>
            <InputField label="Nome" type="text" name="nome" placeholder="Digite seu nome" />
            <InputField label="E-mail" type="email" name="email" placeholder="Digite seu e-mail" />
            <InputField label="Telefone" type="text" name="telefone" placeholder="Digite seu telefone" />     
            <BotaoEnviar texto="Enviar" />
        </form>
    )
}
export default FormularioCadastro