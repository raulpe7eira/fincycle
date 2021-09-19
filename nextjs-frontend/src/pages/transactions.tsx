import {
  Column,
  IntegratedFiltering,
  IntegratedPaging,
  PagingState,
  SearchState,
  SortingState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  PagingPanel,
  SearchPanel,
  Table,
  TableHeaderRow,
  Toolbar,
} from "@devexpress/dx-react-grid-material-ui";
import { Container, Typography } from "@material-ui/core";

const columns: Column[] = [
  {
    name: "payment_date",
    title: "Data pag.",
  },
  {
    name: "name",
    title: "Nome",
  },
  {
    name: "category",
    title: "Categoria",
  },
  {
    name: "type",
    title: "Operação",
  },
  {
    name: "created_at",
    title: "Criado em",
  },
];

const TransactionsPage = (props) => {
  return (
    <Container>
      <Typography component="h1" variant="h4">
        Minhas transações
      </Typography>
      <Grid rows={[]} columns={columns}>
        <Table />
        <SortingState
          defaultSorting={[{ columnName: "created_at", direction: "desc" }]}
        />
        <SearchState defaultValue="Luz" />
        <PagingState defaultCurrentPage={0} pageSize={5} />
        <TableHeaderRow></TableHeaderRow>
        <IntegratedFiltering />
        <Toolbar />
        <SearchPanel />
        <PagingPanel />
        <IntegratedPaging />
      </Grid>
    </Container>
  );
};

export default TransactionsPage;
