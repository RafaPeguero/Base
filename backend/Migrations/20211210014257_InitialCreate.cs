using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Nacionality",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(60)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nacionality", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FreeStyler",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nacionalidadId = table.Column<int>(type: "int", nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(60)", nullable: true),
                    edad = table.Column<int>(type: "int", nullable: false),
                    competicionesGanadas = table.Column<int>(type: "int", nullable: false),
                    nacionalityId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FreeStyler", x => x.id);
                    table.ForeignKey(
                        name: "FK_FreeStyler_Nacionality_nacionalityId",
                        column: x => x.nacionalityId,
                        principalTable: "Nacionality",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FreeStyler_nacionalityId",
                table: "FreeStyler",
                column: "nacionalityId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FreeStyler");

            migrationBuilder.DropTable(
                name: "Nacionality");
        }
    }
}
