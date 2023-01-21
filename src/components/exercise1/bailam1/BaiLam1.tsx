import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";

export default function BaiLam1() {
    return (
        <Center>
            <Card shadow="sm" p="lg" radius="md" withBorder style={{ maxWidth: "350px", marginTop: "24px" }}>
                <Card.Section>
                    <Image
                        src="https://images.unsplash.com/photo-1638793772352-631e0543c211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
                        height={160}
                        alt="Norway"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>Son Doong Adventures</Text>
                    <Badge color="green" variant="light">
                        FEATURED
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                    With Son Doong Tours you can explore more of the magical fjord landscapes with tours and activities
                    on and around the Son Doong cave of Vietnam
                </Text>

                <Button variant="light" fullWidth mt="md" radius="md" color="orange.2">
                    Book classic tour now
                </Button>
            </Card>
        </Center>
    );
}
