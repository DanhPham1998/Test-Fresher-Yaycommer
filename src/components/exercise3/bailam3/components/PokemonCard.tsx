import { Badge, Button, Card, Group, Image, Text, createStyles } from "@mantine/core";
import { PokemonData } from "../data/pokemon.data";
import { useClipboard } from "@mantine/hooks";

export default function PokemonCard({ pokemon }: { pokemon: PokemonData }) {
    //Làm Bài Tại Đây

    const clipboard = useClipboard({ timeout: 500 });

    return (
        <Card shadow="sm" p="lg" radius="md" withBorder style={{ maxWidth: "350px" }}>
            <Card.Section style={{ background: "white" }}>
                <Image src={pokemon.image} height={300} alt="Norway" fit="contain" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{pokemon.name}</Text>
            </Group>

            <Text size="sm" color="dimmed">
                {pokemon.description}
            </Text>

            <Button
                variant="light"
                fullWidth
                mt="md"
                radius="md"
                color={clipboard.copied ? "teal" : "orange.2"}
                onClick={() => clipboard.copy(pokemon.description)}
            >
                {clipboard.copied ? "Copied" : "Copy Pokemon Description"}
            </Button>
        </Card>
    );
}
