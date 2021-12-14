using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class FixForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "nacionalidadId",
                table: "FreeStyler");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "nacionalidadId",
                table: "FreeStyler",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
