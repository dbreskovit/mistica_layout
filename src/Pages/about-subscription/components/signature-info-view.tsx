import type { SignatureInfoViewProps } from "../types";

import { Box, Text, Divider, Inline } from "@telefonica/mistica";

export function SignatureInfoView({ textLeft, textRight }: SignatureInfoViewProps) {
  return (
    <>
    <Box>
      <Box paddingY={20} >
        <Inline space={"between"}>
          <Text size={15} weight="bold">{textLeft}</Text>
          <Text size={15}>{textRight}</Text>
        </Inline>
      </Box>
    </Box>
    <Divider></Divider>
  </>
  )
}
