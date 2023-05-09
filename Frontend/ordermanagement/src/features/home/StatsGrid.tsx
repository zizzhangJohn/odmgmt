import { Container, Grid } from "@mui/material"
import { StatsModel } from "../../graphql/generated/schema"
import OmHeader from "../../components/elements/OmHeader"

interface StatsGridProps {
    stats: StatsModel
}
export default function StatsGrid({ stats }: StatsGridProps) {
    return (
        <Container>
            <Grid container spacing={3} alignItems='center'>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <OmHeader header="Stats" />
                </Grid>
                <Grid item xs={2}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={3}>Total Orders:</Grid>
                <Grid item xs={3}>{stats.totalOrders}</Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={3}>Pending Orders:</Grid>
                <Grid item xs={3}>{stats.pendingOrders}</Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={3}>Draft Orders:</Grid>
                <Grid item xs={3}>{stats.draftOrders}</Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={3}>Completed Orders:</Grid>
                <Grid item xs={3}>{stats.completedOrders}</Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={3}>Shipped Orders:</Grid>
                <Grid item xs={3}>{stats.shippedOrders}</Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Container>
    )
}