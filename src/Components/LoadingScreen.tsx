import { Box, BrandLoadingScreen, ButtonLayout, ButtonPrimary, EmailField, Form, Stack, TextField } from '@telefonica/mistica'

export function LoadingScreen() {
    return <>
        <BrandLoadingScreen title="Some title" description="Some description text" />
        <BrandLoadingScreen title="Some title" description="Some description text" />
        <Form
            onSubmit={(formData) =>
                alert({
                    title: "This is your data",
                    message: JSON.stringify(formData, null, 2),
                })
            }
        >
            <Box padding={16}>
                <Stack space={16}>
                    <TextField name="name" label="Name" />
                    <EmailField name="email" label="e-mail" />
                    <ButtonLayout
                        primaryButton={<ButtonPrimary submit>Send</ButtonPrimary>}
                    />
                </Stack>
            </Box>
        </Form>

    </>
}