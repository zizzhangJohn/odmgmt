import { Container, Grid } from "@mui/material"
import { StatsModel } from "../../graphql/generated/schema"
import OmHeader from "../../components/elements/OmHeader"
import StatsCard from "../../components/elements/StatsCard"
import InventoryIcon from '@mui/icons-material/Inventory';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

interface StatsGridProps {
    stats: StatsModel
}
export default function StatsGrid({ stats }: StatsGridProps) {
    return (
        <Grid container spacing={1} alignItems='center'>
            <Grid item xs={6}>
                <StatsCard muiIcon={InventoryIcon} statsName="Total Orders" statsNumber={stats.totalOrders} />
            </Grid>
            <Grid item xs={6}>
                <StatsCard muiIcon={RecentActorsIcon} statsName="Total Customers" statsNumber={stats.totalCustomers} />
            </Grid>

            <Grid item xs={3}>
                <StatsCard muiIcon={DriveFileRenameOutlineIcon} statsName="Draft Orders" statsNumber={stats.draftOrders} />
            </Grid>
            <Grid item xs={3}>
                <StatsCard muiIcon={PendingActionsIcon} statsName="Pending Orders" statsNumber={stats.pendingOrders} />
            </Grid>
            <Grid item xs={3}>
                <StatsCard muiIcon={LocalShippingIcon} statsName="Shipped Orders" statsNumber={stats.shippedOrders} />
            </Grid>

            <Grid item xs={3}>
                <StatsCard muiIcon={TaskAltIcon} statsName="Completed Orders" statsNumber={stats.completedOrders} />
            </Grid>
        </Grid>
    )
}