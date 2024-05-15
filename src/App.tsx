import { IconArrowBigUp } from "@tabler/icons-react";
import remarkGfm from "remark-gfm";
import AIWriter from "react-aiwriter";
import Markdown from "react-markdown";
import {
  ActionIcon,
  Box,
  Card,
  Center,
  Container,
  Flex,
  Loader,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useChat } from "./hooks";
function App() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      message: "",
      termsOfService: false,
    },
  });

  const chat = useChat();

  return (
    <>
      <main>
        <Container>
          <Text
            variant="gradient"
            size={"35px"}
            ta={"center"}
            fw={"bolder"}
            pt={"1rem"}
            gradient={{ from: "blue", to: "pink", deg: 90 }}
          >
            AI RESEARCH ASSISTANCE FOR COMPUTING AND ENGINEERING FIELD
          </Text>

          <Center>
            <Box size={"responsive"} p={{ base: "1rem" }}>
              <Stack
                justify="space-between"
                h={{ base: "80vh" }}
                w={{ base: "100vh" }}
                p={{ base: "1rem" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Card
                  shadow="sm"
                  padding="xl"
                  component="div"
                  withBorder
                  w={{ base: 800 }}
                  h={{ base: 500 }}
                  style={{
                    overflowY: "scroll",
                  }}
                >
                  {chat.data && (
                    <AIWriter>
                      <div
                        style={{
                          fontSize: "21px",
                        }}
                      >
                        <Markdown remarkPlugins={[remarkGfm]}>
                          {chat.data?.answer}
                        </Markdown>
                      </div>
                    </AIWriter>
                  )}
                </Card>
                <form
                  onSubmit={form.onSubmit((values) =>
                    chat.mutate({ message: values.message })
                  )}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Flex
                    gap="sm"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="nowrap"
                  >
                    <TextInput
                      key={form.key("message")}
                      {...form.getInputProps("message")}
                      size="lg"
                      radius="md"
                      placeholder="Give me research papers or Articles related to ..."
                      style={{
                        width: "700px",
                      }}
                    />
                    <Tooltip label="send message">
                      <ActionIcon variant="filled" type="submit" size="xl">
                        {chat.isPending ? (
                          <Loader color="white" size="sm" />
                        ) : (
                          <IconArrowBigUp />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  </Flex>
                </form>
              </Stack>
            </Box>
          </Center>
        </Container>
      </main>
    </>
  );
}

export default App;
