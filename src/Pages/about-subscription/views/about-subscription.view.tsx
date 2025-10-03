import { Box, NavigationBar, Title1, Divider, Stack } from "@telefonica/mistica";
import { SignatureInfoView } from "../components/signature-info-view";

export function AboutSubscriptionView () {
    return (
        <Box paddingTop={72}>
            <Title1 >SOBRE A ASSINATURA</Title1>
            <NavigationBar withBorder={false} onBack={() => {}} />
                <Stack space={16}>
                    <SignatureInfoView textLeft="Parcelas" textRight="12x de R$ 14.90/mês"/>
                    <SignatureInfoView textLeft="Valor" textRight="Total de R$ 178,80"/>
                    <SignatureInfoView textLeft="Pagamento recorrente" textRight=">"/>
                    <SignatureInfoView textLeft="Contratação" textRight="01/07/2025"/>
                    <SignatureInfoView textLeft="Ativação" textRight="01/07/2025"/>
                    <SignatureInfoView textLeft="Renovação" textRight="01/07/2026"/>
           
                    <Divider></Divider>
                    <Title1>Ações</Title1>
                </Stack>
        </Box>
    )
}