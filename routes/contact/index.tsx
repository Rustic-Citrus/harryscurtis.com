export default function Contact() {
  return (
    <div>
      <h1 class="text-2xl">Contact</h1>
      <table class="table-auto">
        <thead>
          <caption class="table-caption invisible absolute">
            Contact information for Harry Curtis.
          </caption>
        </thead>
        <tbody>
          <tr class="table-row border-solid border-2 border-black">
            <td class="table-cell" colspan={2}>Email</td>
            <td></td>
            <td class="table-cell">harrycurtis@live.com</td>
          </tr>
          <tr class="table-row">
            <td class="table-cell" colspan={2}>Phone</td>
            <td></td>
            <td class="table-cell">044 7379 555795</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary">A test button</button>
    </div>
  );
}
