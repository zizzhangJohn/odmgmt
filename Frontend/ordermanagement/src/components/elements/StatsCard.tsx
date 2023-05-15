import { Card, CardContent, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
type StatsCardProps = {
    muiIcon: SvgIconComponent,
    statsNumber: number,
    statsName: string
}

export default function StatsCard({ muiIcon, statsNumber, statsName }: StatsCardProps) {
    const Icon = muiIcon;
    return (
        <Card variant="outlined">
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <Icon fontSize="large" sx={{ my: 3 }} />
                <Typography variant="h6">
                    {statsNumber}
                </Typography>
                <Typography variant="subtitle1">
                    {statsName}
                </Typography>
            </CardContent>
        </Card>
    )
}