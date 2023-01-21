import { SegmentedControl, Grid, Switch, Divider, Button, Box, ButtonProps } from "@mantine/core";

import { useState } from "react";

export default function BaiLam2() {
    const [color, setColor] = useState<any>("outline");
    const [checked, setChecked] = useState<boolean>(false);
    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <Grid mt={24} mb={8}>
                <Grid.Col
                    md={6}
                    sm={12}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "8px" }}
                >
                    <SegmentedControl
                        color="pink"
                        value={color}
                        onChange={(value) => {
                            setColor(value);
                        }}
                        data={[
                            { label: "Outline", value: "outline" },
                            { label: "Light", value: "light" },
                            { label: "Filled", value: "filled" },
                            { label: "Subtle", value: "subtle" },
                            { label: "Default", value: "default" },
                        ]}
                    />
                </Grid.Col>
                <Grid.Col md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Switch label="Disabled" checked={checked} onChange={(event) => handleChecked(event)} />
                </Grid.Col>
            </Grid>
            <Divider my="md" />
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "24px" }}>
                <Button variant={color} disabled={checked}>
                    The Button
                </Button>
            </Box>
        </>
    );
}
